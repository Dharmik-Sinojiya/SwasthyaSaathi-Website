import {
    Box,
    Typography,
} from '@mui/material';
import { getTheme } from '../utils/theme';
import FeatureCard from './FeatureCard';
import '../../public/css/index.css'
export default function FitnessFeature({ fitnessPoint }) {
    const theme = getTheme();
    return (
        <>
            <Box sx={{ mt: 7, mb: 7, width: '100%' }}>
                <Typography variant="heading1" gutterBottom
                    sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
                >
                    Healthcare Access, Even Without Internet
                </Typography>
                <Typography
  variant="body1"
  gutterBottom
  sx={{ color: theme.palette.secondary.main, textAlign: "center", fontWeight: 400 }}
>
  SwasthyaSaathi is a mobile-based EHR companion built to support ASHA workers in low internet areas. 
  Designed with simplicity and accessibility in mind, it enables reliable health data collection, offline access, 
  and better patient management — helping bridge the digital gap in rural healthcare delivery.
</Typography>

                <Box sx={{ display: "flex", flexWrap: 'wrap', rowGap: '1.9rem', justifyContent: 'space-between', marginTop: '24px' }}>
                    {fitnessPoint.map((title, index) => (
                        <FeatureCard value={title} key={index} />
                    ))}
                </Box>
            </Box>
        </>
    )
}