import React from 'react';
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

const ReferralFormModal = ({ open, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://accredian-backend-task-tr3y.onrender.com/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Referral submitted successfully');
        onClose();
      } else {
        alert('Failed to submit referral');
      }
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('An error occurred' + error.message);
    }
  };
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 4, m: 'auto', mt: '20vh', bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Refer a Course
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              {...register('referrerName', { required: 'Referrer Name is required' })}
              error={!!errors.referrerName}
              helperText={errors.referrerName?.message}
            />
            <TextField
              label="Friend's Name"
              variant="outlined"
              fullWidth
              {...register('refereeName', { required: 'Friend\'s Name is required' })}
              error={!!errors.refereeName}
              helperText={errors.refereeName?.message}
            />
            <TextField
              label="Friend's Email"
              variant="outlined"
              fullWidth
              {...register('refereeEmail', { required: 'Friend\'s Email is required' })}
              error={!!errors.refereeEmail}
              helperText={errors.refereeEmail?.message}
            />
            <Button variant="contained" type="submit" color="primary">
              Submit Referral
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
