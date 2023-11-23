import { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, Platform, TextInput,} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const { height: HeightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {

    const navigation = useNavigation();


    const video = useRef(null);
    const [status, setStatus] = useState({})

    function handlePlayer() {
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
    }

    return (
        
        <Pressable onPress={handlePlayer}>

            <View
                style={[
                    styles.info,
                    {
                        bottom: 110,
                    }
                ]}>
                <Text style={{ position: 'absolute',
                marginVertical: 522,
        zIndex: 99,
        right: 18,
        bottom: Platform === 'android' ? 120 : 170,
        gap: 8,
        resizeMode: 'contain',
        alignSelf: 'center',}}>

           

                 <AntDesign name="search1" size={28} color="#fff"  margin/>

                </Text>
                 
                <Text style={styles.name}>{data?.name}</Text>
                <Text numberOfLines={2} style={styles.descripton}>{data?.descripton}</Text>
                <Text style={{color: "#fff", margin:3}}>{data?.musica}</Text>

            </View>

            <View style={styles.actions}> 
                <TouchableOpacity style={styles.actionButton}>
                    <FontAwesome name="circle-thin" size={50} color="#fff" />
                    <TextInput style={{backgroundColor: "red", textAlign: 'center', width: 20, height: 20, borderRadius: 52, marginLeft: 11, marginTop:-15 }}>

                    <Text style={styles.actionTextC}>+</Text>

                    </TextInput>

                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Perfil")}>
                    <Ionicons name="heart" size={35} color="#fff" onClick/>
                    <Text style={styles.actionText}>109.6K</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="chatbubble-ellipses" size={35} color="#fff" />
                    <Text style={styles.actionText}>485</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="bookmark" size={35} color="#fff" />
                    <Text style={styles.actionText}>6537</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <TextInput style={{backgroundColor: '#00ff7f', width: 30, height: 30, borderRadius: 52, textAlign: "center"}}>

                    <MaterialCommunityIcons name="whatsapp" size={22} color="#fff" />

                    </TextInput>
                    <Text style={styles.actionText}>17.7K</Text>
                </TouchableOpacity>
            </View>

            <Video
                ref={video}
                style={{ width: '100%', height: HeightScreen }}
                source={{ uri: data?.video }}
                resizeMode="cover"
                shouldPlay={false}
                isMuted={false}
                isLooping={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8,
    },
    name: {
        color: '#fff',
        marginBottom: 8,
        fontWeight: 'bold',

    },
    descripton: {
        color: '#fff',
        marginRight: 24,
    },

    actions: {
        position: 'absolute',
        zIndex: 99,
        right: 10,
        bottom: Platform === 'android' ? 120 : 170,
        gap: 8,
        alignSelf: 'center',
    },

    actionText: {
        textAlign: 'center',
        marginLeft: -4,
        color: '#fff',

    },

    actionTextC: {
        alignSelf: 'center',
        zIndex: 99,
        color: '#fff',
       
        
    },

   
})