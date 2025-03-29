
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { createCheckoutSession, processPayment } from "@/services/stripe";

interface PaymentButtonProps {
  productId?: string;
  amount: number;
  description: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  children: React.ReactNode;
  useCheckout?: boolean;
}

const PaymentButton = ({
  productId,
  amount,
  description,
  onSuccess,
  onError,
  variant = "default",
  children,
  useCheckout = true,
}: PaymentButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      if (useCheckout && productId) {
        // Use Stripe Checkout for more complex payments
        const checkoutUrl = await createCheckoutSession(productId);
        
        if (checkoutUrl) {
          // Redirect to Stripe Checkout
          window.location.href = checkoutUrl;
          return;
        } else {
          throw new Error("Failed to create checkout session");
        }
      } else {
        // Use direct payment processing for simple payments
        const success = await processPayment(amount, 'inr', description);
        
        if (success) {
          if (onSuccess) onSuccess();
        } else {
          throw new Error("Payment processing failed");
        }
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed", {
        description: error instanceof Error ? error.message : "Unknown error occurred",
      });
      
      if (onError && error instanceof Error) onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant={variant} 
      onClick={handlePayment} 
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          {children}
        </>
      )}
    </Button>
  );
};

export default PaymentButton;
