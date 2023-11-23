import { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, Platform } from "react-native";
import { Video } from "expo-av";
import { Ionicons} from '@expo/vector-icons'

const { height: HeightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {

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
                    <Text style={styles.name}>{data?.name}</Text>
                    <Text numberOfLines={2} style={styles.descripton}>{data?.descripton}</Text>

            </View>

            <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="heart" size={35} color="#fff"/>
                        <Text style={styles.actionText}>109.6K</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="chatbubble-ellipses" size={35} color="#fff"/>
                        <Text style={styles.actionText}>485</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="bookmark" size={35} color="#fff"/>
                        <Text style={styles.actionText}>6537</Text>
                    </TouchableOpacity>
            </View>

            <Video 
                ref={video}
                style={{ width: '100%', height: HeightScreen}}
                source={{ uri: data?.video}}
                resizeMode='cover'
                shouldPlay={false}
                isMuted={false}
                isLooping={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    info:{
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8,
    },
    name:{
        color: '#fff',
        marginBottom: 8,
        fontWeight: 'bold',
        
    },
    descripton:{
        color: '#fff',
        marginRight: 24,
    },

    actions: {
        position: 'absolute',
        zIndex: 99,
        right: 10,
        bottom: Platform === 'android' ? 120 : 170,
        gap: 8,
    },

    actionText: {
        textAlign: 'center',
        marginLeft: -4,
        color: '#fff',

    }
})