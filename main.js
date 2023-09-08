// creation of all the entities
db.createCollection("users", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "name", "password" ],
          properties: {
             name: {
                bsonType: "string",
                description: "'name' must be a string and is required"
             },
        password:{
 bsonType:"string",
 description:"password must be a string and is required"
 }
            
            
          }
       }
    }
 } )
 db.createCollection('admin')
 db.createCollection('customers')
 db.createCollection('categories')
 db.createCollection('products')
 db.createCollection('orders')


//  Show commands for inserting records into the entities
 db.users.insertMany([
    {_id:3, password:'vivian', username:'viv123'},
      {_id:4, password:'steve123', username:"stephen"}
    ])

  



//  Show commands for inserting records into the entities

db.categories.insertMany([

    {
        _id:1,
        name:'category1',
        description:'category1'

    },
    {
        _id:2,
        name:'category2',
        description:'category2'
    }
])
db.admin.insertMany([

    {
         _id:1,
        f_name:'admin1',
        email_address:'stephenadeosun411@gmail.com',
        phone_number:'07042465683'

    },
    {
        _id:2,
        f_name:'admin2',
        email_address:'stephenadeosun411@gmail.com',
        phone_number:'07042465683'
    }
])


db.products.insertMany([
    {
        _id:1,
        name:'product1',
        description:'product1',
        price:100,
        quantity:10,
        brand:'brand1',
      


    },
    {
        _id:2,
        name:'product2',
        description:'product2',
        price:200,
        quantity:20,
        brand:'brand2',
       
    }

])


db.orders.insertMany([
    {
        _id:1,
        order_date:Date.now(),
        total:1000,
        customer_id:1,
        product_id:1,
        status:'pending'
    },
    {
        _id:2,
        order_date:Date.now(),
        total:2000,
        customer_id:2,
        product_id:2,
        status:'pending'
    }
])


// Show commands for getting records from two or more entities


//  Get all users and and their types
// admin or customer
// admin
db.user.aggregate([
    {
        $lookup:{
            from:'admin',
            localField:'_id',
            foreignField:'_id',
            as:'admin'
        }
    }
])

// customer
db.user.aggregate([
    {
        $lookup:{
            from:'customers',
            localField:'_id',
            foreignField:'_id',
            as:'customer'
        }
    }
])


// Get all products and their categories
db.products.aggregate([
    {
        $lookup:{
            from:'categories',
            localField:'_id',
            foreignField:'_id',
            as:'category'
        }
    }
])

// Get all products and their customers
db.products.aggregate([
    {
        $lookup:{
            from:'customers',
            localField:'_id',
            foreignField:'_id',
            as:'customer'
        }
    }
])

// Get all orders and their products
db.orders.aggregate([
    {
        $lookup:{
            from:'products',
            localField:'_id',
            foreignField:'_id',
            as:'product'
        }
    }
])

// Get all customers and their orders
db.customers.aggregate([
    {
        $lookup:{
            from:'orders',
            localField:'_id',
            foreignField:'_id',
            as:'order'
        }
    }
])


/

// Show commands for getting records in the entities
// Get all products
db.products.find()
db.categories.find()
db.admin.find()
db.orders.findOne({_id:1})
db.customers.findOne({_id:2})
db.users.findOne({_id:3})


// Show commands for updating records in the entities
db.products.updateOne({_id:1},{$set:{name:'bag'}})
db.orders.updateOne({_id:2},{$set:{name:'new_order'}})
db.customers.updateOne({_id:3},{$set:{name:'dan_soji'}})

// Show commands for deleting records in the entities
db.products.deleteOne({_id:1})
db.orders.deleteOne({_id:2})
db.customers.deleteOne({_id:3})
