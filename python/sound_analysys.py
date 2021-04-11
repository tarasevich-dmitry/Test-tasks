#Get .wav file info python

from pydub import AudioSegment 
from pydub.utils import make_chunks
  
# import the audio file
wav_file = AudioSegment.from_file(file="reference_bites2_114db.wav", format="wav") 
  
# data type fo the file
print(type(wav_file)) 
# OUTPUT: <class 'pydub.audio_segment.AudioSegment'>
  
def get_loudness(sound, slice_size=60*1000):
    return max(chunk.dBFS for chunk in make_chunks(sound, slice_size))

print("Max dbFS:", get_loudness(wav_file))


#  To find frame rate of song/file
print("Frame rate:", wav_file.frame_rate)   
  
# To know about channels of file
print("Channels of file:", wav_file.channels) 
  
# Find the number of bytes per sample 
print("Bytes per sample:",wav_file.sample_width ) 
  
# Find Maximum amplitude 
print("Max amplitude:", wav_file.max)
  
# To know length of audio file
print("Length of file:", len(wav_file))

  
'''
We can change the attrinbutes of file by 
changeed_audio_segment = audio_segment.set_ATTRIBUTENAME(x) 
'''
#wav_file_new = wav_file.set_frame_rate(50) 
#print(wav_file_new.frame_rate)
