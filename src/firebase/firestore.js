// src/firebase/firestore.js
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

const productsCol = collection(db, "products");
const discountsCol = collection(db, "discounts");
const affiliatesCol = collection(db, "affiliates");
const payoutsCol = collection(db, "payouts");

export async function addProduct(product) {
  return await addDoc(productsCol, product);
}

export async function getProducts() {
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function updateProduct(id, updates) {
  const productRef = doc(db, "products", id);
  return await updateDoc(productRef, updates);
}

export async function deleteProduct(id) {
  const productRef = doc(db, "products", id);
  return await deleteDoc(productRef);
}

export async function getDiscounts() {
  const snapshot = await getDocs(discountsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addDiscount(discount) {
  return await addDoc(discountsCol, discount);
}

export async function updateDiscount(id, updates) {
  const discountRef = doc(db, "discounts", id);
  return await updateDoc(discountRef, updates);
}

export async function deleteDiscount(id) {
  const discountRef = doc(db, "discounts", id);
  return await deleteDoc(discountRef);
}

// Affiliates CRUD & payout tracking
export async function getAffiliates() {
  const snapshot = await getDocs(affiliatesCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addAffiliate(affiliate) {
  return await addDoc(affiliatesCol, affiliate);
}

export async function updateAffiliate(id, updates) {
  const affiliateRef = doc(db, "affiliates", id);
  return await updateDoc(affiliateRef, updates);
}

export async function deleteAffiliate(id) {
  const affiliateRef = doc(db, "affiliates", id);
  return await deleteDoc(affiliateRef);
}

export async function addPayout(payout) {
  return await addDoc(payoutsCol, payout);
}

export async function getPayouts() {
  const snapshot = await getDocs(payoutsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
