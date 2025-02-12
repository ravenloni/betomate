
 import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
  (async () => {
  
    const supabaseUrl = 'https://jvivowfxpvlxxjsxawoa.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2aXZvd2Z4cHZseHhqc3hhd29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzODgzMjUsImV4cCI6MjA1NDk2NDMyNX0.wZsW4GxkkOO_7iAiTXrr0gnOqZ0gu3PJSSdvzaw_NUw';
    const supabase = createClient(supabaseUrl, supabaseKey);
  
    document.getElementById('dateForm').addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const dateInput = document.getElementById('dateInput').value;
      if (!dateInput) {
        alert('Por favor, selecciona una fecha.');
        return;
      }
  
      try {
        const { data, error } = await supabase.from('citas').insert([{ fecha: dateInput }]);
  
        if (error) {
          throw error;
        }
        console.log('Fecha guardada:', data); // Para asegurarte de que data se está usando
        // Redirige a otra página después de guardar
        window.location.href = 'games.html';
        this.reset();
      } catch (error) {
        console.error('Error al guardar la fecha:', error);
        alert('Hubo un error al guardar la fecha.');
      }
    });
  })();