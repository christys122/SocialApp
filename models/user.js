const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      //unique, required, trimmed
      type: String,
      unique: true,
      required: true,
    },
    email: {
      //required, unique,validate
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: "enter valid email",
      },
    },
    thoughts: [//aray of _id references Thought model
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [//ary of _id values referencing User model
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = { User, Thought };
