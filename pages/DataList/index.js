import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { products } from "../../setting/data";

import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/router'

const DataList = ({ data }) => {
  const router = useRouter()

  return (
    <Main>
      <Container>
        <Typography variant='h4' textAlign='center'><b>Danh sách Products</b></Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell align="right">PRICE</TableCell>
                <TableCell align="right">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={uuidv4()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    <IconButton  onClick={() => router.push(`DataList/${item.id}`)}>
                      <SearchIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Main>
  );
};

export default DataList;

DataList.propTypes = {
  data: PropTypes.array,
};
DataList.defaultProps = {
  data: products,
};
const Main = styled.div``;
