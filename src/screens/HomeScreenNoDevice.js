import React from 'react';
import * as nativebase from 'native-base';

const HomeScreenNoDevice = ({navigation})=>{
    return(
        <nativebase.Box>
            <nativebase.Text>Home Screen</nativebase.Text>
            <nativebase.Pressable
            onPress={()=>navigation.navigate('ConnectionScreen')}
            >
                <nativebase.Text>Go To connect</nativebase.Text>
            </nativebase.Pressable>
        </nativebase.Box>
    )
}
export default HomeScreenNoDevice;