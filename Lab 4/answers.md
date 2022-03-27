## Answer For Question 1
```
use Student

db.student.insert({
"name": "John",
"dateOfBirth": "1990-01-01T00:00:00Z",
"subjects": ["Application frameworks", "Computer architecture"],
"marks": [65,85,70,90]
}
)
```

## Answer For Question 2
```
db.student.find({"name": "John"})
```
## Answer For Question 3
```
db.student.updateOne({
    "name": "John"
    },
    {
      $push:{"subjects": "Distributed computing"}
    })
```
## Answer For Question 4

```
db.student.insertMany([{
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "marks": [80,75,60,45],
    "isActive": true
    },
    {
    "name": "Jane",
    "dateOfBirth": "1990-02-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "marks": [90,85,60,55],
    "isActive": false
    }
])
```
## Answer For Question 5
```
db.student.updateOne({
    "name": "Smith",
    "isActive": true
    },
    {
      $push:{"subjects": "Distributed computing"}
    })
```

## Answer For Question 6

```
db.student.find( { "isActive": true, "subjects": "Distributed computing" } )
```

## Answer For Question 7

```
db.student.findOne({"isActive": false})
```

## Answer For Question 8
```
db.student.deleteOne({
    "name": "John"
    })
```

## Answer For Question 9

```
db.student.updateMany({}, {$set:{"GPA": 0}})
```

## Answer For Question 10

```
db.student.aggregate( [
   {
     $addFields: {
       average: { $avg: "marks" } 
     }
   }
] )
```