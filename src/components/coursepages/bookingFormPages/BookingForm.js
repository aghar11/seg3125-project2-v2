import { useState } from "react";
import CourseSelection from "./CourseSelection";
import TimeSelection from "./TimeSelection";
import GolfersSelection from "./GolfersSelection";
import GolferInfoInput from "./GolferInfoInput";
import DetailsConfirmation from "./DetailsConfirmation";
import FinalPage from "./FinalPage";

function BookingForm() {
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
            return(
                <CourseSelection setCourseName={setCourseName}/>
            );
        // Time Selection
        case 2:
            return (
                <TimeSelection setCourseName={setCourseName} prevStep={prevStep}/>
            );
        case 3:
            return (
                <GolfersSelection setCourseName={setCourseName} prevStep={prevStep}/>
            );
        // Info Input
        case 4:
            return (
                <GolferInfoInput setCourseName={setCourseName} prevStep={prevStep}/>
            );
        // Details Confirmation
        case 5:
            return (
                <DetailsConfirmation setCourseName={setCourseName} prevStep={prevStep}/>
            );
        // Final Page
        case 6:
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

export default BookingForm;