import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';


export default function App() {

    const [projects, setProjects]= useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Lucas Luis Ribeiro' 
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" /> 

        <SafeAreaView style={styles.container}>
            <FlatList t
                data={projects}
                keyExtractor={proj => proj.id}
                renderItem={({ item: proj }) => (
                    <Text style={styles.project} >{proj.title}</Text>
                )}
            />

            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddProject} >
                <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>
        </SafeAreaView>

        {/* <View style={styles.container}>        
            {projects.map(proj => (
                <Text style={styles.project} key={proj.id}>{proj.title}</Text>)
            )}
        </View> */}
    </>
    );
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        //justifyContent: 'center',
        // alignItems: 'center'
    },

    project: {
        color: '#FFF',
        fontSize: 20
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});