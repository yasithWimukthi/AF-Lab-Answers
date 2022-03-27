## Answer For Question 3

```
use sliit

db.student.insert({
"name": "John",
"dateOfBirth": "1990-01-01T00:00:00Z",
"subjects": ["Application frameworks", "Computer architecture"]
}
)
```
## Answer For Question 4
```db.student.find({"name": "John"})```

## Answer For Question 5
```db.student.find({"_id": ObjectId("895f741e654s6w8548w2scw9")})```

## Answer For Question 6

```
db.student.insertMany([{
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": true
    },
    {
    "name": "Jane",
    "dateOfBirth": "1990-02-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": false
    }
])
```

## Answer For Question 7

```
db.student.updateOne({
    "name": "Smith",
    "isActive": true
    },
    {
      $push:{"subjects": "Distributed computing"}
    })
```
## Answer For Question 8
```
db.student.updateOne({
    "name": "John"
    },
    {
      $set:{"isActive": false}
    })
```

## Answer For Question 9

```
db.student.deleteOne({
    "name": "John"
    })
```

---
Further reading: [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/)

MongoDB blog article : [Introduction To MongoDB](https://wimukthiyasith.medium.com/introduction-to-mongodb-9627b6af985d)