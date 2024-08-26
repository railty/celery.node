import celery from "celery-node";

const client = celery.createClient("redis://", "redis://");


const main = async ()=>{
    const keyPrefix = client.backend.getKeyPrefix();
    console.log("keyPrefix = ", keyPrefix);

    const ks = await client.backend.keys("*");
    console.log("ks = ", ks);

    client.disconnect();
}
main();