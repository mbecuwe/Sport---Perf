import {init} from '@lib/mongo'


export async function get(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}