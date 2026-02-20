import { StandardCheckoutClient, Env } from 'pg-sdk-node';
import { PG_CLIENT_ID, PG_CLIENT_SECRET } from '../util/constant.js';
 
const clientId = PG_CLIENT_ID;
const clientSecret = PG_CLIENT_SECRET;
const clientVersion = 1;  //insert your client version here
const env = Env.SANDBOX;      //change to Env.PRODUCTION when you go live
 
export const client = StandardCheckoutClient.getInstance(clientId, clientSecret, clientVersion, env);