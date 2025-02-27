import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Container, Stack, Link, Divider } from '@mui/material';

const HeroSection = ({ onOpenModal }) => {
  return (
    <Container sx={{ width: '100%', padding: 0, marginTop: '-7.5px', mb: '-10px' }}>
      <Box sx={{ width: '100%', bgcolor: '#DDEAFC', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>
        <Typography sx={{ fontSize: '1vw' }}>Navigate your ideal career path with tailored expert advice </Typography>
        <Button sx={{ textTransform: 'capitalize' }}>Contact Expert</Button>
      </Box>
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 'none', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#1A73E8' }}>
            accredian
            <Typography sx={{ fontSize: '0.5vw', color: 'black' }}>credentials that matters</Typography>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ fontSize: '0.8vw', textTransform: 'capitalize' }} onClick={onOpenModal}>Refer and Earn</Button>
            <Button color="inherit" sx={{ fontSize: '0.8vw', textTransform: 'capitalize' }}>Resources</Button>
            <Button color="inherit" sx={{ fontSize: '0.8vw', textTransform: 'capitalize' }}>About Us</Button>
            <Button color="inherit" sx={{ bgcolor: '#EAEDF1', fontSize: '0.8vw', textTransform: 'capitalize' }}>Login</Button>
            <Button sx={{ bgcolor: '#1A73E8', fontSize: '0.8vw', textTransform: 'capitalize', color: 'white' }}>Try for free</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
          bgcolor: '#DDEAFC',
          margin: 'auto',
          borderRadius: '30px',
          padding: '12px 60px',
          color: '#4B4B4B'
        }}>
          {['Refers', 'Benefits', 'FAQs', 'Support'].map((text, index) => (
            <Typography
              key={index}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  color: '#1A73E8',
                },
                '&:hover::after': {
                  content: "''",
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#1A73E8',
                }
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
        <Box sx={{ height: '420px', width: '900px', bgcolor: '#EEF5FF', mt: 4, borderRadius: '29px', boxShadow: '1px 1px 49px -17px rgba(0,0,0,0.75)', display: 'flex', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ textAlign: 'left', padding: 4, alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 3, zIndex: '999' }}>
            <Typography sx={{ fontSize: '3vw', lineHeight: '3vw', fontWeight: 'bold' }}>Let's Learn <br />& Earn</Typography>
            <Typography sx={{ fontSize: '1.6vw', lineHeight: '2vw' }}>Get a chance to win <br /> up-to <span style={{ fontSize: '2vw', fontWeight: 'bold', color: '#1A73E8' }}>Rs 15,000</span></Typography>
            <Button sx={{ bgcolor: '#1A73E8', color: 'white', textTransform: 'capitalize', width: '50%' }} onClick={onOpenModal}>Refer Now</Button>
          </Box>
          <Box component="img"
            src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvksDg7T0LYUOHyxT~iVlCN70n51xvwbxWkUQMlpKqm5DcBwCoLfRGDRHQHnYLQIky0ps7bFzaGRXS~Li1735L9Sjqnnit4qZx7c09Or5D38idEJGw1L1zP~Do9ILaZflh1LQS9Rie5HJfzsYEx920jw9TOeFDpwL-SX3S~6p5nBnZsw1KjP4O7WLauroSwctv54uSC1fGN~~RIgmlvUU76B4QEck5wnapZapc~gazWRH9rLG45Phhqx07U-yN2AGIrVt7nmgqJABgWgtYkO4WDypUXdWG3gMP8P5JO4cBnKvvWMBCZkD9QaEgzZeGwYqV561xLHLNMPwbKVJs-6cQ__"
            sx={{ objectFit: 'cover', position: 'absolute', width: '70%', right: '-60px', height: '100%', zIndex: '999' }}
            alt="description" />
        </Box>
        <Box component='img'
          src='https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqAKeBNQ9vJ8xAxOCBPNkV719VSX0DwjxUFjBTYpiQkV2sppCKIoYRU7Q-XYiVAnInvQMVbC7-fhvl1sWPEdP7SO4ES0SmTpLzKptJ8im~Dr32vXweEsPAaDcMxeJk98mh3PtJ5MV5Io7IDR4nT4mXE2~jyiSQWfIFarrJaBk4pUeCoIGn6d9gef8ymNtbjHdkPgCkkglr1FV20De2O4Pz8QbgTxM51aNY8rkLdj-4VbBA3-rU41jxVE0lnWSu7gFC-JriQdp0uWnLm7qfvgsHgJKP~hdO5k76QkWqksEYspCWuLa3cqpU7WZzWG25Cb-8ZYJ2WdxiBMjAMRFV54Lw__'
          alt='note'
          sx={{ position: 'absolute', width: '8%', bottom: '8%' }}
        ></Box>
        <Box component='img'
          src='https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqAKeBNQ9vJ8xAxOCBPNkV719VSX0DwjxUFjBTYpiQkV2sppCKIoYRU7Q-XYiVAnInvQMVbC7-fhvl1sWPEdP7SO4ES0SmTpLzKptJ8im~Dr32vXweEsPAaDcMxeJk98mh3PtJ5MV5Io7IDR4nT4mXE2~jyiSQWfIFarrJaBk4pUeCoIGn6d9gef8ymNtbjHdkPgCkkglr1FV20De2O4Pz8QbgTxM51aNY8rkLdj-4VbBA3-rU41jxVE0lnWSu7gFC-JriQdp0uWnLm7qfvgsHgJKP~hdO5k76QkWqksEYspCWuLa3cqpU7WZzWG25Cb-8ZYJ2WdxiBMjAMRFV54Lw__'
          alt='note'
          sx={{ position: 'absolute', width: '8%', top: '30%', rotate: '180deg', right: '38%' }}
        ></Box>
        <Box component='img'
          src='https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqAKeBNQ9vJ8xAxOCBPNkV719VSX0DwjxUFjBTYpiQkV2sppCKIoYRU7Q-XYiVAnInvQMVbC7-fhvl1sWPEdP7SO4ES0SmTpLzKptJ8im~Dr32vXweEsPAaDcMxeJk98mh3PtJ5MV5Io7IDR4nT4mXE2~jyiSQWfIFarrJaBk4pUeCoIGn6d9gef8ymNtbjHdkPgCkkglr1FV20De2O4Pz8QbgTxM51aNY8rkLdj-4VbBA3-rU41jxVE0lnWSu7gFC-JriQdp0uWnLm7qfvgsHgJKP~hdO5k76QkWqksEYspCWuLa3cqpU7WZzWG25Cb-8ZYJ2WdxiBMjAMRFV54Lw__'
          alt='note'
          sx={{ position: 'absolute', width: '8%', top: '26%', right: '20%', rotate: '180deg' }}
        ></Box>
        <Box component='img'
          src='https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqAKeBNQ9vJ8xAxOCBPNkV719VSX0DwjxUFjBTYpiQkV2sppCKIoYRU7Q-XYiVAnInvQMVbC7-fhvl1sWPEdP7SO4ES0SmTpLzKptJ8im~Dr32vXweEsPAaDcMxeJk98mh3PtJ5MV5Io7IDR4nT4mXE2~jyiSQWfIFarrJaBk4pUeCoIGn6d9gef8ymNtbjHdkPgCkkglr1FV20De2O4Pz8QbgTxM51aNY8rkLdj-4VbBA3-rU41jxVE0lnWSu7gFC-JriQdp0uWnLm7qfvgsHgJKP~hdO5k76QkWqksEYspCWuLa3cqpU7WZzWG25Cb-8ZYJ2WdxiBMjAMRFV54Lw__'
          alt='note'
          sx={{ position: 'absolute', width: '8%', top: '56%', right: '21%', rotate: '270deg' }}
        ></Box>
        <Box component='img'
          src='https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pqAKeBNQ9vJ8xAxOCBPNkV719VSX0DwjxUFjBTYpiQkV2sppCKIoYRU7Q-XYiVAnInvQMVbC7-fhvl1sWPEdP7SO4ES0SmTpLzKptJ8im~Dr32vXweEsPAaDcMxeJk98mh3PtJ5MV5Io7IDR4nT4mXE2~jyiSQWfIFarrJaBk4pUeCoIGn6d9gef8ymNtbjHdkPgCkkglr1FV20De2O4Pz8QbgTxM51aNY8rkLdj-4VbBA3-rU41jxVE0lnWSu7gFC-JriQdp0uWnLm7qfvgsHgJKP~hdO5k76QkWqksEYspCWuLa3cqpU7WZzWG25Cb-8ZYJ2WdxiBMjAMRFV54Lw__'
          alt='note'
          sx={{ position: 'absolute', width: '8%', top: '30%', left: '20%', rotate: '120deg' }}
        ></Box>
      </Box>

      <Box sx={{ backgroundColor: '#DDEAFC', p: 3, mt: 9, height: 'fit-content', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ mt: 1, fontWeight: 'bold', fontSize: '1.2vw' }}>How do I <span style={{ color: '#1A73E8' }}>Refer?</span></Typography>
        <img src="/Group.svg" alt="Group Illustration" style={{ width: '100%', height: 'auto' }} />
        <Button sx={{ bgcolor: '#1A73E8', color: 'white', textTransform: 'capitalize', width: '20%', mt: 2 }} onClick={onOpenModal}>Refer Now</Button>
      </Box>

      <Box sx={{ backgroundColor: '#fff', p: 5, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{fontSize: '1.3vw'}}>
          What are the <span style={{ color: '#1A73E8' }}>Referral Benefits?</span>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
          <img src="/Group2.png" alt="Group Illustration" style={{ width: '30%' }} />
          <Box sx={{ height: '63vh', width: '100%', bgcolor: 'white', borderRadius: '10px', mt: 2, overflow: 'hidden', boxShadow: '-1px -1px 10px -5px rgba(0,0,0,0.75)' }}>

            <Box sx={{ height: '2.8vw', width: '100%', bgcolor: '#1A73E8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '1vw', ml: 2, fontWeight: 'bold', color: 'white' }}>Programs</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography sx={{ fontSize: '1vw', fontWeight: 'bold', color: 'white' }}>Referrer Bonus</Typography>
                <Typography sx={{ fontSize: '1vw', mr: 2, fontWeight: 'bold', color: 'white' }}>Referee Bonus</Typography>
              </Box>
            </Box>

            {[
              { img:'/Group.png', name: "Professional Certificate Program in Product Management", referrerBonus: "7000", refereeBonus: "9000" },
              { img:'/Group.png', name: "PG Certificate Program in Strategic Product Management", referrerBonus: "9000", refereeBonus: "11000" },
              { img:'/Group.png', name: "Executive Program in Data Driven Product Management", referrerBonus: "10000", refereeBonus: "10000" },
              { img:'/Group.png', name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "10000", refereeBonus: "10000" },
              { img:'/Group.png', name: "Executive Program in Product Management", referrerBonus: "10000", refereeBonus: "10000" },
              { img:'/Group.png', name: "Advanced Certification in Product Management", referrerBonus: "10000", refereeBonus: "10000" },
              { img:'/Group.png', name: "Executive Program in Product Management and Project Management", referrerBonus: "10000", refereeBonus: "10000"},
            ].map((program, index) => (
              <Box key={index} sx={{ height: '2.8vw', width: '100%', display: 'flex', justifyContent: 'space-between',bgcolor: '#FFFFFF', alignItems: 'center', mt: 1.3 }}>
                <img src={program.img} style={{width: '1.1vw', marginRight: '-2vw', marginLeft: '0.8vw'}}/>
                <Typography sx={{ fontSize: '0.94vw', ml: 2, width: '50%', color: '#4B5660' }}>{program.name}</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography sx={{ fontSize: '0.9vw', mr: 15, color: '#4B5660' }}>{program.referrerBonus}</Typography>
                  <Typography sx={{ fontSize: '0.9vw', mr: 2, color: '#4B5660'}}>{program.refereeBonus}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Button sx={{ bgcolor: '#1A73E8', color: 'white', textTransform: 'capitalize', width: '20%', mt: 2 }} onClick={onOpenModal}>Refer Now</Button>
      </Box>

      <Box sx={{ backgroundColor: '#fff', p: 5, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{fontSize: '1.3vw'}}>
          Frequently Asked <span style={{ color: '#1A73E8' }}>Questions</span>
        </Typography>
        <Box sx={{width: '90%', mt: 3, display: 'flex', mb: 6}}>
          <Box>
            <Button sx={{textTransform: 'capitalize',
              mr: 1,
              p: '10px 50px',
              mb: 2,
              color: '#737373',
              border: '1px solid #737373',
              borderRadius: '5px',
              width: '60%',
              bgcolor: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '-1px -1px 10px -5px rgba(0,0,0,0.75)',
                color: '#1A73E8',
                backgroundColor: 'white',
                border: 'none',
              },}}>Eligibility</Button>
            <Button sx={{textTransform: 'capitalize',
              mr: 1,
              p: '10px 50px',
              mb: 2,
              color: '#737373',
              border: '1px solid #737373',
              borderRadius: '5px',
              width: '60%',
              bgcolor: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '-1px -1px 10px -5px rgba(0,0,0,0.75)',
                color: '#1A73E8',
                backgroundColor: 'white',
                border: 'none',
              },}}>How To Use?</Button>
            <Button sx={{textTransform: 'capitalize',
              mr: 1,
              p: '10px 30px',
              mb: 2,
              color: '#737373',
              border: '1px solid #737373',
              borderRadius: '5px',
              width: '60%',
              bgcolor: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '-1px -1px 10px -5px rgba(0,0,0,0.75)',
                color: '#1A73E8',
                backgroundColor: 'white',
                border: 'none',
              },}}>Terms & Conditions</Button>
          </Box>
          <Box>
            <Typography sx={{fontSize: '0.9vw', mb: 2, '&:hover': {color: '#1A73E8'}}}>Do I need to have prior Product Management and Project Management experience to enroll in the program?</Typography>
            <Typography sx={{fontSize: '0.9vw', mb: 2, '&:hover': {color: '#1A73E8'}}}>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.</Typography>
            <Typography sx={{fontWeight:'bold', fontSize: '1vw', '&:hover': {color: '#1A73E8'}}}>What is the minimum system configuration required?</Typography>
          </Box>
        </Box>
        <img src='Group3.png' style={{width: '90%'}}/>
      </Box>

      <Box sx={{ backgroundColor: '#282828', p: '3vw 12vw', height: 'fit-content' }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3}}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
            accredian
            <Typography sx={{ fontSize: '0.5vw', color: 'white' }}>credentials that matters</Typography>
          </Typography>
          <Box>
            <Button sx={{textTransform: 'capitalize', bgcolor: '#1A73E8', color: 'white', fontSize: '0.9vw'}}>Schedule 1-on-1 Call Now</Button>
            <Typography sx={{fontSize: '0.8vw', color: 'white'}}>Speak with our Learning Advisor</Typography>
          </Box>
        </Box>
        <Divider sx={{bgcolor: 'white', width: '100%'}}></Divider>
        <img src='Container.png' style={{width: '108%'}} />
        <Typography sx={{textAlign: 'center', mt: 5, color: 'white', fontSize: '0.9vw'}}>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;
