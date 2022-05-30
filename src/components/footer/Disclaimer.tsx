import React from 'react'

interface DisclaimerProps {
    
}

const Disclaimer: React.FC<DisclaimerProps> = () => {
    return (
        <div className="text-base bg-[#1a1a1a] text-white py-4 px-12">
            <strong> Returns Disclaimer: </strong> You have 30 days from date of purchase for full refund.
        </div>
    )
}

export default Disclaimer
