import React from 'react';
import Typography from '@mui/material/Typography';
import ServiceCard from '../../components/ServiceCard';

function Services () {

    const services = [
        {
          title: "Ask Me Anything",
          price: "$160",
          description: "get some questions answered!",
          bullets: [
            "it comes with this thing",
            "and this other thing",
            "and this last thing",
          ],
        },
        {
            title: "Ask Me Anything",
            price: "$160",
            description: "get some questions answered!",
            bullets: [
              "it comes with this thing",
              "and this other thing",
              "and this last thing",
            ],
          },
      ];

    return (
        <section>
            <Typography component="h2" variant="h3">Services</Typography>
            {services.map((service, index) => {
                return (
                    <ServiceCard key={index} title={service.title} price={service.price} description={service.description} bullets={service.bullets} />
                )
            })}
        </section>
    );
}

export default Services;