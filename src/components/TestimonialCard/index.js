import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TestimonialCard() {

    const theme = useTheme();

    const testimonials = [
        {
            client: 'Meredyth G. & Auggie',
            highlight: 'Jaime helped me and my new best friend Auggie to get comfortalbe with commands and learn to really trust each other.',
            reviewText: "Auggie particularly had a problem with pulling on the leash when I first brought him home, but together with Jaime's help, we're well on our way to being great on leash! Super grateful for the techniques Jaime has given me so far and the patience shown with me in learning them. I couldn't recommend them enough to help train you and your furry children!"
        }
    ]

    return (
        <Card sx={{ minWidth: 275, backgroundColor: `${theme.palette.primary.main}`}} >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Testimonial
          </Typography>
          <Typography variant="h5" component="div" color="theme.palette.primary">{testimonials[0].highlight}
          </Typography>
          <Typography variant="body2" sx={{ m: 1.5 }}>
            {testimonials[0].reviewText}
          </Typography>
          <Typography sx={{ mt: 1.5, textAlign: 'right' }} color="text.secondary">
            ~ {testimonials[0].client}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default TestimonialCard;