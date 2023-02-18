import asyncio
import websockets

'''
    Data format json: 
    {
        "<exhauster_name>(u171)" : [ 
            {
                "component" : "<component_name>(bearing_1)"
                "days_to_failure": <prediction>
                "precision": <precision>
            },
            {...},
            ...
        ],
        "...": [...],
        ...
    }
'''

async def send_prediction(websocket):
    async for msg in websocket:
        json = json.dumps([{
                "exhauter_name": "\u0423-171",
                "hours_to_failure": 120,
                "precision": 100,
            }, {
                "exhauter_name": "\u0423-172",
                "hours_to_failure": 120,
                "precision": 100,
            }])
        await websocket.send(json)
        
async def serve():
    async with websockets.serve(send_prediction, "localhost", 8765):
        await asyncio.Future()
        
if __name__ == "__main__":
    asyncio.run(serve())