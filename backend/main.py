from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(
    title="OneShotV API",
    description="Backend for OneShotV AI Video Creation Platform",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:3000",  # Next.js frontend
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Data Models
class VideoGenerationRequest(BaseModel):
    prompt: str
    camera_movement: Optional[str] = "static"
    aspect_ratio: str = "16:9"

class VideoGenerationResponse(BaseModel):
    id: str
    status: str
    url: Optional[str] = None
    message: str

@app.get("/")
async def root():
    return {"message": "Welcome to OneShotV API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/generate", response_model=VideoGenerationResponse)
async def generate_video(request: VideoGenerationRequest):
    # Mocking the generation process
    # In reality, this would call Sora API or n8n webhook
    print(f"Received prompt: {request.prompt} with movement: {request.camera_movement}")
    
    return VideoGenerationResponse(
        id="mock_job_123",
        status="processing",
        message="Video generation started"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
