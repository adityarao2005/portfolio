import React, { useState, useEffect } from "react";

// Create the typing animation
export default function TypingAnimation(props: {
	data: string[];
	textStyles?: string;
	cursorStyles?: string;
	speed?: number;
	blinkFrequency?: number;
}) {
	// Get the data from the properties
	const array = props.data;
	const textStyles = props.textStyles ? props.textStyles : "";
	const cursorStyles = props.cursorStyles ? props.cursorStyles : "";
	const speed = props.speed ? props.speed : 100;
	const blinkFrequency = props.blinkFrequency ? props.blinkFrequency : 5;

	const [typingText, setTypingText] = useState("");
	const [arrayIndex, setArrayIndex] = useState(0);
	const [stringIndex, setStringIndex] = useState(0);
	const [goingForward, setGoingForward] = useState(true);
	const [sleeping, setSleeping] = useState(false);
	const [sleepCounter, setSleepCounter] = useState(1);
	const [blinkPointer, setBlinkPointer] = useState(true);
	// Config

	// Create the typing effect
	useEffect(() => {
		setTimeout(() => {
			// If we are currently sleeping
			if (sleeping) {
				// increment the sleep counter
				setSleepCounter(sleepCounter + 1);
				// Create the blinking effect
				if (sleepCounter % (blinkFrequency * 2) === 0) {
					setBlinkPointer(true);
				} else if (sleepCounter % blinkFrequency === 0) {
					setBlinkPointer(false);
				}

				// If we've counted 20 times then invert it and go backwards
				if (sleepCounter % (blinkFrequency * 4) === 0) {
					setSleeping(false);
					setGoingForward(false);
					setSleepCounter(1);
					setBlinkPointer(true);
				}

				return;
			}

			// If we are going forward
			if (goingForward) {
				// If the index is less than the length
				if (stringIndex < array[arrayIndex].length) {
					// add a character to the typingText
					setTypingText(
						typingText + array[arrayIndex].charAt(stringIndex)
					);

					// increment the index
					setStringIndex(stringIndex + 1);
				}
				// if it is at the length
				else {
					// pause for a bit
					setSleeping(true);
				}

				// If we are going back
			} else {
				// If the index is less than the length
				if (stringIndex > 0) {
					// add a character to the typingText
					setTypingText(typingText.slice(0, -1));

					// increment the index
					setStringIndex(stringIndex - 1);
				}
				// if it is at the length
				else {
					setGoingForward(true);
					setArrayIndex((arrayIndex + 1) % array.length);
				}
			}
		}, speed);
	});

	// Return the UI for the typing animation
	return (
		<>
			<span className={textStyles}>{typingText}</span>
			<span
				className={cursorStyles + " " + (!blinkPointer && " invisible")}
			>
				<b>|</b>
			</span>
		</>
	);
}
