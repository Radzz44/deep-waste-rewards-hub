
import { useState } from 'react';
import { MapPin, Truck, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const RequestCollection = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNextStep = () => {
    if (step === 1 && !address) {
      toast({
        title: "Address Required",
        description: "Please enter your address to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && (!date || !time)) {
      toast({
        title: "Date and Time Required",
        description: "Please select a date and time for collection",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      submitRequest();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submitRequest = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Collection Requested!",
        description: "We'll send a smart bin to your location at the scheduled time.",
      });
      
      // Reset form
      setStep(1);
      setAddress('');
      setDate('');
      setTime('');
      setNotes('');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Request Waste Collection</h2>
        <p className="text-sm text-muted-foreground">
          Schedule a smart dustbin to collect your waste materials
        </p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= i ? "eco-gradient text-white" : "bg-muted text-muted-foreground"
              }`}
            >
              {i === 1 ? (
                <MapPin size={20} />
              ) : i === 2 ? (
                <Calendar size={20} />
              ) : (
                <Truck size={20} />
              )}
            </div>
            <span className="text-xs mt-1 text-muted-foreground">
              {i === 1 ? "Location" : i === 2 ? "Schedule" : "Confirm"}
            </span>
          </div>
        ))}
      </div>
      
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="address">Collection Address</Label>
            <Textarea
              id="address"
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="resize-none h-32"
            />
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="date">Collection Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div>
            <Label htmlFor="time">Collection Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
      )}
      
      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg space-y-3">
            <div className="flex items-start">
              <MapPin size={18} className="mr-2 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Collection Address</p>
                <p className="text-sm text-muted-foreground">{address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar size={18} className="mr-2 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Collection Date</p>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock size={18} className="mr-2 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Collection Time</p>
                <p className="text-sm text-muted-foreground">{time}</p>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any special instructions for collection?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="resize-none h-24"
            />
          </div>
        </div>
      )}
      
      <div className="flex gap-3">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={handlePrevStep}
            className="flex-1"
          >
            Back
          </Button>
        )}
        
        <Button
          onClick={handleNextStep}
          className={`flex-1 ${step === 3 ? "eco-gradient text-white" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : step < 3 ? (
            <>Next</>
          ) : (
            <>Request Collection</>
          )}
        </Button>
      </div>
    </div>
  );
};

export default RequestCollection;
