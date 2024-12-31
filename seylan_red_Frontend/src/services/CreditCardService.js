export const applyForCreditCard = async (applicationData) => {
    try {
      const response = await fetch(`https://localhost:7230/api/CreditCardApplication/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });
  
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("Application already exists with the same email.");
        }
        throw new Error("Failed to submit application.");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error applying for credit card:", error);
      throw error;
    }
  };
  