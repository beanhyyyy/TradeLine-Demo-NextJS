import PropTypes from "prop-types";
import styled from "styled-components";
import { products } from "../../setting/data";

import _find from 'lodash/find';

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";


import { useRouter } from 'next/router'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DataDetail = ({ data }) => {
  const router = useRouter()

  const idItem = router.query.id;

  const dataItem = _find(data, item => item.id.toString() === idItem);
  
  return (
    <Main>
      <Container>
        <Title>
          <Typography variant='h4' textAlign='center'><b>Chi tiết Product</b></Typography>
        </Title>
        <Title>
          <Box textAlign='right'>
          <IconButton onClick={() => router.push('/DataList')}>
            <ArrowBackIcon />
          </IconButton>
          </Box>
        </Title>
        {dataItem && <Card variant='outlined'>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                {dataItem.id}:
              </Grid>
              <Grid item>
                {dataItem.name}
              </Grid>
              <Grid item>
                {dataItem.price}
              </Grid>
            </Grid>
          </CardContent>
        </Card> }
        
      </Container>
    </Main>
  );
};

export default DataDetail;

DataDetail.propTypes = {
  data: PropTypes.array,
};
DataDetail.defaultProps = {
  data: products,
};

const Main = styled.div``;

const Title = styled.div`
  padding-bottom: 5vh;
`;

