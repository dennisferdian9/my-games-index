<template>
  <form @submit.prevent="onSubmit" class="mt-4 px-4 sm:px-0">
    <h2 class="text-xl font-bold mb-4">Game Details Form</h2>
    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Title</span>
      <Field name="title" v-slot="{ field }">
        <input v-bind="field" type="text" class="w-full border border-gray-300 rounded mt-1 px-2  py-1" />
      </Field>
      <p v-if="errors.title" class="text-red-500">{{ errors.title }}</p>
    </div>

    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Thumbnail URL</span>
      <Field name="thumbnail" v-slot="{ field }">
        <input v-bind="field" type="text" class="w-full border border-gray-300 rounded mt-1 px-2  py-1" />
      </Field>
      <p v-if="errors.thumbnail" class="text-red-500">{{ errors.thumbnail }}</p>
    </div>

    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Status</span>
      <Field name="status" v-slot="{ field }">
        <select v-bind="field" class="w-full border border-gray-300 rounded mt-1 px-2  py-1">
          <option value="">Select status</option>
          <option value="live">Live</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </Field>
      <p v-if="errors.status" class="text-red-500">{{ errors.status }}</p>
    </div>

    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Release Date</span>
      <Field name="releaseDate" v-slot="{ field }">
        <input type="date" v-bind="field" class="w-full border border-gray-300 rounded mt-1 px-2  py-1" />
      </Field>
      <p v-if="errors.releaseDate" class="text-red-500">{{ errors.releaseDate }}</p>
    </div>

    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Short Description</span>
      <Field name="shortDescription" v-slot="{ field }">
        <textarea v-bind="field" class="w-full border border-gray-300 rounded mt-1 px-2  py-1"></textarea>
      </Field>
      <p v-if="errors.shortDescription" class="text-red-500">{{ errors.shortDescription }}</p>
    </div>

    <div class="mb-4">
      <span class="block text-gray-700 font-medium">Detail Description</span>
      <Field name="detailDescription" v-slot="{ field }">
        <textarea v-bind="field" class="w-full border border-gray-300 rounded mt-1 px-2  py-1"></textarea>
      </Field>
      <p v-if="errors.detailDescription" class="text-red-500">{{ errors.detailDescription }}</p>
    </div>

    <div class="mb-4">
      <h3 class="text-lg font-bold mb-2">Screenshots</h3>
      <div v-for="(screenshot, index) in screenshots" :key="index" class="flex items-center space-x-2">
        <input v-model="screenshot.image" type="text" class="w-full border border-gray-300 rounded mt-1 px-2  py-1" placeholder="Screenshot URL" />
        <button @click="removeScreenshot(index)" type="button" class="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
      </div>
      <button @click="addScreenshot" type="button" class="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Add Screenshot</button>
    </div>

    <button type="submit" class="w-full bg-green-500 text-white py-2 rounded font-medium">Submit</button>
  </form>
</template>

<script setup lang="ts">
const router = useRouter();

const { errors, validate } = useForm({
  validationSchema: gameSchema
});

const screenshots = ref<{ id: number; image: string }[]>([]);

const addScreenshot = () => {
  screenshots.value.push({ id: screenshots.value.length + 1, image: '' });
};

const removeScreenshot = (index: number) => {
  screenshots.value.splice(index, 1);
};

const onSubmit = async (event: Event) => {
  event.preventDefault();

  const result = await validate(); 
  if (!result.valid) {
    console.error('Validation failed:', result.errors);
    return; 
  }
  
  console.log('Form Submitted Successfully:', result.values);
  router.push('/');
};
</script>
