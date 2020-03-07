import React, {useState} from "react";
import {
    Box,
    Text,
    Layer,
    Button,
    Heading,
    TextArea,
    TextInput
  } from "grommet";

const ShippingAddress = () => {
  const [open, setOpen] = useState();
  const [edit, setEdit] = useState();

  const [address, setAddress] = React.useState("");
  const [name, setName] = React.useState("");

  const onChange = event => setAddress(event.target.value);
  const handleChangeName = event => setName(event.target.value);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  const onEdit = () => setEdit(true);

  return (
    <Box
      pad="medium"
      background={{ color: "white" }}
      round
      elevation="xsmall"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <p>User</p>
      <p>Alamat</p>
      <Box direction="row" gap="medium" justify="center">
        <Button label="Tambah alamat" onClick={onOpen} />
        <Button label="ganti alamat" onClick={onOpen} />
      </Box>
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box
            pad="medium"
            gap="small"
            width="medium"
            height="300px"
            style={{}}
          >
            {edit ? (
              <Box direction="column" gap="medium">
                <TextInput
                  value={name}
                  onChange={onChange}
                  placeholder="Nama penerima"
                />
                <TextArea
                  value={address}
                  onChange={onChange}
                  placeholder="Alamat"
                />
              </Box>
            ) : (
              <Box direction="column" gap="medium">
                <Heading level={4} margin="none">
                  Alamat
                </Heading>
                <Text>Nama Penerima</Text>
                <Text>Alamat</Text>
              </Box>
            )}

            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: "medium", bottom: "small" }}
            ></Box>
            {edit ? (
              <Box direction="row" gap="medium">
                <Button label="Save" primary onClick={onEdit} />
                <Button label="Batal" onClick={onClose} />
              </Box>
            ) : (
              <Box direction="row" gap="medium">
                <Button label="Edit alamat" primary onClick={onEdit} />
                <Button label="Batal" onClick={onClose} />
              </Box>
            )}
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default ShippingAddress;
