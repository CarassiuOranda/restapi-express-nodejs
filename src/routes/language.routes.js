import {Router} from "express";
import {methods as languageController} from "../controllers/language.controllers"

const router=Router();

router.get("/",languageController.getLanguages);
router.post("/",languageController.addLanguage);

export default router;