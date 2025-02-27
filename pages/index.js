import { useState } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ReferralFormModal from '../components/ReferralFormModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Container>
      <HeroSection onOpenModal={handleOpenModal} />
      <ReferralFormModal open={modalOpen} onClose={handleCloseModal} />
    </Container>
  );
}
