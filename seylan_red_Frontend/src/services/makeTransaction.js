const makeTransaction = async (transactionData) => {
    try {
        const response = await fetch('https://localhost:7230/api/Transaction/makeTransaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error('Transaction already exists with the same account number.');
            }
            throw new Error('Failed to submit transaction.');
        }

        const data = await response.json();
        console.log('Transaction successful:', data); // Log successful response
        return data;
    } catch (error) {
        console.error('Error making transaction:', error.message); // Log error message
        throw error;
    }
};

export { makeTransaction };
