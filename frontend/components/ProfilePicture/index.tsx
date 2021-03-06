import React from 'react';
import {Image} from 'react-native';

export type ProfilePictureProps = {
    image?: string,
    size?: number,
}

const ProfilePicture = ({image = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                            size = 50}: ProfilePictureProps) => (
    <Image
        source={{uri: image}}
        style={{
            width: size,
            height: size,
            borderRadius: size,
        }}
    />
)

export default ProfilePicture;