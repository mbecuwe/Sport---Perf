import {init} from '@lib/mongo'


export async function get(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

export async function post(req, res){
	const {db } = await init()
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE