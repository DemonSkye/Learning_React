import React from "react";
import { Button, Container, Icon, Menu, Responsive, Segment, Visibility } from "semantic-ui-react";

export class Header extends React.Component{
	render(){
		return(
			<Segment inverted textAlign='center' style={{minheight:200}} vertical>
				<Menu size='large'>
					<Container fluid>
						<Menu.Item as='a' active>Home</Menu.Item>
						<Menu.Item as='a'>Projects</Menu.Item>
						<Menu.Item as='a'>Resume</Menu.Item>
						<Menu.Item as='a'>Contact</Menu.Item>
						<Menu.Item position='right'>
							<Button as='a' primary>Log In</Button>
							<Button as='a' secondary>Sign Up</Button>
						</Menu.Item>
					</Container>
				</Menu>
			</Segment>
		);
	}
}