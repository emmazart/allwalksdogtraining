import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TestimonialCard({ client, highlight, reviewText }) {

    const theme = useTheme();

    return (
        <Card sx={{ minWidth: 275, backgroundColor: `${theme.palette.primary.main}`}} >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Testimonial
          </Typography>
          <Typography variant="h5" component="div" color="theme.palette.primary">{highlight}
          </Typography>
          <Typography variant="body2" sx={{ m: 1.5 }}>
            {reviewText}
          </Typography>
          <Typography sx={{ mt: 1.5, textAlign: 'right' }} color="text.secondary">
            ~ {client}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default TestimonialCard;