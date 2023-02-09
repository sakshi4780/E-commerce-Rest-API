import express from "express";
const router = express.Router();
import auth from "../middlewares/auth";
import {
  registerController,
  loginController,
  userController,
  refreshController,
  productController,
} from "../controllers";
import admin from "../middlewares/admin";
//const router = require('express').Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/me", auth, userController.me);
router.post("/refresh", refreshController.refresh);
router.post("/logout", auth, loginController.logout);
router.post("/products", [auth, admin], productController.store);
router.put("/products/:id", [auth, admin], productController.update);
router.delete("/products/:id", [auth, admin], productController.destroy);
router.get("/products", productController.index);
router.get("/products/:id", productController.show);
export default router;
