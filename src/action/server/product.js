"use server"

import { dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";


export const getProducts = async () => {
  const collection = await dbConnect("products");
  const products = await collection.find().toArray();
  return products;
};


export const getSingleProducts=async(id)=>{
    if(id.length!=24){

        return {}
    }
    const query={_id:new ObjectId(id)}
    const collection=await dbConnect("products")
    const product=await collection.findOne(query)
    // const product=await dbConnect(collections.PRODUCTS).findOne(query)
    return product || {}
}