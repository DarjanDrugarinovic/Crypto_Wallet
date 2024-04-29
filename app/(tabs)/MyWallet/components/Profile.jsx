import { Alert } from "react-native";
import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../../context/GlobalProvider";
import { Loader } from "../../../../components/Loader";
import { FONTS } from "../../../../constants";
import ErrorDialog from "../../../../components/ErrorDialog";
import { getUser } from "../../../../api/user/getUser";
import { useFetchOnLoad } from "../../../../api/useFetch";

const defaultProfileImage =
  "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

const Profile = () => {
  const { walletAddress } = useGlobalContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState(defaultProfileImage);
  const { data, error, refetch, isLoading } = useFetchOnLoad(() =>
    getUser(walletAddress)
  );

  useEffect(() => {
    if (data) {
      const { name, image } = data;
      setName(name);
      setImage(image);
    }
  }, [data]);

  if (error) {
    return <ErrorDialog error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <InfoView>
      <ProfileImage
        source={{
          uri: image,
        }}
      />
      <NameText>{name}</NameText>
    </InfoView>
  );
};

const NameText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 20px;

  text-align: center;
  flex: 1;
  margin-right: 46px;
  color: white;
`;

const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

export default Profile;
