import { RequestHandler } from "express";

interface loginProps {
  email:string;
  password:string
}
export const login: RequestHandler<
  unknown,
  unknown,
  loginProps,
  unknown
> = async (req, res, next) => {};

interface SignProps {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  adresse: string;
}
export const signup: RequestHandler<
  unknown,
  unknown,
  SignProps,
  unknown
> = async (req, res, next) => {

    const {nom,prenom,email,telephone,password,adresse}=req.body
    try{
res.send("requete reussi")
    }catch(error){
        console.log(error);
        
    }
};
