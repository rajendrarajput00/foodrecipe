import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const RecipDesign = (props) => {
    const classes = useStyles();
    const RecipeData = props.data;
    return (
        <div>
            {RecipeData && RecipeData.map((RecipData, ReciprKey) => (
                <>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={RecipData.recipe.image}
                                title={RecipData.recipe.label}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {RecipData.recipe.label}
                                </Typography>

                                {RecipData.recipe.ingredients.map((ingredienData, ikey) => {
                                    return(
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {ingredienData.text}
                                       </Typography>
                                    )
                                
                                })}
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        </CardActions>
                    </Card>
                </>
            ))}
        </div>
    );
};

export default RecipDesign;

