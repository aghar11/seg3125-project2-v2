import { useState } from "react";
import GolferInfoInput from "../../coursepages/bookingFormPages/GolferInfoInput";
import FinalPage from "./FinalPage";
import RegistrationDetails from "./RegistrationDetails";


function RegistrationForm() {
    //state for steps
    const [step, setstep] = useState(1);

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    const setCourseName = input => e => {
        nextStep();
    }

    // JS switch case to show different form in each step
    switch (step) {
        // Course Selection
        case 1:
            return (
                <GolferInfoInput setCourseName={setCourseName} prevStep={prevStep}/>
            );
        // Details Confirmation
        case 2:
            return (
                <RegistrationDetails setCourseName={setCourseName} prevStep={prevStep}/>
            );
        // Final Page
        case 3:
            return (
                <FinalPage setCourseName={setCourseName} prevStep={prevStep}/>
            )
        // Default case
        default:
            return (
                <></>
            );
    }
    
}

export default RegistrationForm;