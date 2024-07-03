import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    amount: Number,
    gender: Number,
    imagePath: String,
    
});

export interface IPhoto extends Document {
 
    name: String;
    description: String;
    price: Number;
    category: String;
    stock: Number;
    amount: Number;
    gender: Number;
    imagePath: string;

}

export default model<IPhoto>('Photo', schema);