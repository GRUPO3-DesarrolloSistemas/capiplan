// src/components/MyAgenda/index.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../assets/style/styleCalendar';
import { fonts } from '../themes/fonts';

interface EventItem {
  name: string;
}

interface Day {
  dateString: string;
}

const MyAgenda = () => {
  const [items, setItems] = useState<{ [key: string]: EventItem[] }>({});
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    setSelectedDate(currentDate);
  }, []);

  const renderItem = (item: EventItem) => {
    return (
      <TouchableOpacity onPress={() => handleEventPress(item)}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleEventPress = (item: EventItem) => {
    setSelectedEvent(item);
    setNewEvent(item.name);
    setModalVisible(true);
  };

  const handleNoEventPress = () => {
    setSelectedEvent(null);
    setNewEvent('');
    setModalVisible(true);
  };

  const loadItems = (day: Day) => {
    setTimeout(() => {
      const newItems = { ...items };
      const date = day.dateString;
      if (!newItems[date]) {
        newItems[date] = [];
      }
      setItems(newItems);
    }, 1000);
  };

  const addEvent = () => {
    if (newEvent && selectedDate) {
      const updatedItems = { ...items };
      if (!updatedItems[selectedDate]) {
        updatedItems[selectedDate] = [];
      }
      updatedItems[selectedDate].push({ name: newEvent });
      setItems(updatedItems);
      setNewEvent('');
      setModalVisible(false);
    }
  };

  const updateEvent = () => {
    if (selectedEvent && newEvent) {
      const updatedItems = { ...items };
      const dateItems = updatedItems[selectedDate].map((event) =>
        event === selectedEvent ? { ...event, name: newEvent } : event
      );
      updatedItems[selectedDate] = dateItems;
      setItems(updatedItems);
      setModalVisible(false);
      setNewEvent('');
    }
  };

  const deleteEvent = () => {
    if (selectedEvent) {
      const updatedItems = { ...items };
      const dateItems = updatedItems[selectedDate].filter((event) => event !== selectedEvent);
      updatedItems[selectedDate] = dateItems;
      setItems(updatedItems);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={selectedDate}
        renderItem={renderItem}
        renderEmptyDate={() => {
          return (
            <TouchableOpacity style={styles.emptyDate} onPress={handleNoEventPress}>
              <Text style={styles.emptyDateText}>No events</Text>
            </TouchableOpacity>
          );
        }}
        onDayPress={(day: Day) => {
          setSelectedDate(day.dateString);
        }}
        pastScrollRange={12}
        futureScrollRange={12}
        renderEmptyData={() => (
          <View style={styles.emptyDate}>
            <Text style={styles.emptyDateText}>No events</Text>
          </View>
        )}
        theme={{
          selectedDayBackgroundColor: '#512BCF',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#FA8334',
          dayTextColor: '#151515',
          monthTextColor: '#512BCF',
          arrowColor: '#8A67FF',
          textSectionTitleColor: '#3D3D3D',
          agendaDayTextColor: '#151515',
          agendaDayNumColor: '#3D3D3D',
          agendaTodayColor: '#FA8334',
          agendaKnobColor: '#512BCF'
        }}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => {
        setSelectedEvent(null);
        setNewEvent('');
        setModalVisible(true);
      }}>
        <Text style={styles.addButtonText}>Agregar Evento</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedEvent ? 'Editar Evento' : 'Agregar Evento'}</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Event Name"
              value={newEvent}
              onChangeText={setNewEvent}
            />
            <View style={styles.modalButtonContainer}>
              {selectedEvent ? (
                <>
                  <TouchableOpacity style={styles.modalButton} onPress={updateEvent}>
                    <Icon name='checkmark-circle-outline' style={styles.modalButtonIcon} size={20}></Icon>
                    <Text style={styles.modalButtonText}>Actualizar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={deleteEvent} >
                    <Icon name='close-circle-outline' style={styles.modalButtonIcon} size={20}></Icon>
                    <Text style={styles.modalButtonText}>Eliminar</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity style={styles.modalButton} onPress={addEvent}>
                    <Icon name='add-circle-outline' style={styles.modalButtonIcon} size={20}></Icon>
                    <Text style={styles.modalButtonText}>Agregar</Text>
                  </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.modalButtonCancel} onPress={() => setModalVisible(false)}>
                    <Icon name='arrow-back-circle-outline' style={styles.modalButtonIcon} size={20}></Icon>
                    <Text style={styles.modalButtonText}>Cancelar</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyAgenda;
