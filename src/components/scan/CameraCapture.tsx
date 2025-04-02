
import { useState, useRef } from 'react';
import { Camera, UploadCloud, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CameraCapture = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        setCapturedImage(reader.result as string);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleIdentifyWaste = () => {
    if (!capturedImage) return;
    
    setIsProcessing(true);
    
    // Simulate waste identification process
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Waste Identified!",
        description: "Plastic bottle. You've earned 15 points!",
      });
    }, 2000);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
        className="hidden"
        ref={fileInputRef}
      />
      
      <div className="relative w-full max-w-sm aspect-[3/4] mb-4 rounded-2xl overflow-hidden border-2 border-primary">
        {capturedImage ? (
          <img 
            src={capturedImage} 
            alt="Captured waste" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
            <Camera size={48} className="text-muted-foreground mb-3" />
            <p className="text-center text-muted-foreground px-4">
              Take a photo of waste to identify it and earn rewards
            </p>
          </div>
        )}
      </div>
      
      <div className="flex gap-3 w-full max-w-sm">
        {capturedImage ? (
          <>
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={resetCapture}
            >
              <RefreshCw size={18} className="mr-2" />
              Retake
            </Button>
            <Button 
              className="flex-1 eco-gradient text-white" 
              onClick={handleIdentifyWaste}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={18} className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Identify Waste</>
              )}
            </Button>
          </>
        ) : (
          <>
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={triggerFileInput}
            >
              <UploadCloud size={18} className="mr-2" />
              Upload
            </Button>
            <Button 
              className="flex-1 eco-gradient text-white" 
              onClick={triggerFileInput}
            >
              <Camera size={18} className="mr-2" />
              Take Photo
            </Button>
          </>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 text-center max-w-sm">
        Our AI will analyze your photo to identify the waste type and award points based on recyclability.
      </p>
    </div>
  );
};

export default CameraCapture;
