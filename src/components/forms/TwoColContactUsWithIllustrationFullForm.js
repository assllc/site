import React, {useRef} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/undraw_engineering_team_a7n2.svg";
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import * as jose from "jose";
import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from 'google-auth-library';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto -mt-12 md:mt-auto pb-20 md:pb-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 sm:mt-0 md:mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500 pl-4`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
}); 

export default ({
  subheading = "Contact Us",
  heading = <>We want to hear <span tw="text-primary-500">from you</span><wbr/></>,
  description = "Are you interested in tackling your next software challenge with Agile Software Solutions? Let’s chat! Inquire today and receive a free consultation with our experts.",
  submitButtonText = "Let's get started",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1opgip8', 'template_jjndthg', form.current, 'NWZgOTS2-5L_wwJYB')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setOpen(true);
      }, (error) => {
          console.log(error.text);
      });

    // submitHandler(e.target.email.value, e.target.name.value, e.target.subject.value, e.target.message.value);
  };

  // const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  // const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  // const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  // const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  // const serviceAccountAuth = new JWT({
  //   email: CLIENT_EMAIL,
  //   key: PRIVATE_KEY,
  //   scopes: [
  //       'https://www.googleapis.com/auth/spreadsheets',
  //   ],
  // });
  // const serviceAccountAuth =

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

  // const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // const appendSpreadsheet = async (row) => {
  //   try {
  //     // loads document properties and worksheets
  //     await doc.loadInfo();

  //     const sheet = doc.sheetsById[SHEET_ID];
  //     const result = await sheet.addRow(row);
  //   } catch (e) {
  //     console.error('Error: ', e);
  //   }
  // };

  // function newRow(email, name, subject, message) {    
  //   const newRow = { Email: email, Name: name, Subject: subject, Message: message };
  //   appendSpreadsheet(newRow);
  // }

  // function submitHandler(email, name, subject, message) {
  //   let state = {
  //     Email: email,
  //     Name: name,
  //     Subject: subject,
  //     Message: message
  //   }
  //   axios.post('https://sheet.best/api/sheets/a6e67deb-2f00-43c3-89d3-b331341d53ed', state)
  //   .then(response => {
  //     console.log(response);
  //   });
  // }

  function handleValidation() {

  }

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Subheading tw="md:pt-4"><a href="mailto:contact@agile-software-solutions.com">contact@agile-software-solutions.com</a></Subheading>
            <Form ref={form} onSubmit={sendEmail} method={formMethod}>
              <Input type="email" name="email" placeholder="Your Email Address" required/>
              <Input type="text" name="name" placeholder="Full Name" required/>
              <Input type="text" name="subject" placeholder="Subject" required/>
              <Textarea name="message" placeholder="Your Message Here" required/>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <Snackbar
        open={open} autoHideDuration={6000} onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Success! We look forward to working with you
        </Alert>
      </Snackbar>
    </Container>
  );
};
