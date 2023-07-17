import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
About
} from "./contactfooterstyles";

const ContactFoot = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
            <About>
            Welcome to this Exclusive portal known for its par Excellence. EliteLove Matrimony Services. Join free and add your profile. Search for your dream
				Brides & Grooms. Register your Matrimony Profile for FREE!
            </About>
		</Column>
		<Column>
			<Heading>Help & Support</Heading>
			<FooterLink href="#">24x7 Live Help</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			<FooterLink href="#">Feedback</FooterLink>
			<FooterLink href="#">FAQs</FooterLink>
		</Column>
		<Column>
			<Heading>Quick Links</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Safe Matrimony
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Terms & Condtions
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Privacy policy
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default ContactFoot;