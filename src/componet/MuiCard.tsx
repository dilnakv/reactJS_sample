import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const MuiCard = () =>{
    return(
        <Box width={'300px'}>
            <Card>
                <CardMedia component={'img'} height={'140'} image='https://source.unsplash.com/random' alt='unsplash image'/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                    <Typography variant='body2' color='text.secondary'>
React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
}