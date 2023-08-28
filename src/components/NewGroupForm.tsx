'use client';

import { groupFormSchema } from '@/helpers/validations/groupForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addOrder } from '@/store/slices/ordersSlice';
import { Order } from '@/types/Order';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type Inputs = {
  title: string;
  description: string;
  products: string[];
};

export default function NewGroupForm() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsState);
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      title: '',
      description: '',
      products: [],
    },
    resolver: zodResolver(groupFormSchema),
  });

  const onSubmit = (data: Inputs) => {
    const newGroup: Pick<Order, 'title' | 'description' | 'products'> = {
      ...data,
      products: data.products.map(Number),
    };

    dispatch(addOrder(newGroup));
    reset();
  };

  return (
    <form
      className="d-flex flex-column gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          placeholder="Enter title"
          {...register('title')}
          disabled={isSubmitting}
        />
        {errors.title && (
          <small id="titleHelp" className="form-text text-danger">
            {errors.title.message}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          placeholder="Enter description"
          {...register('description')}
          disabled={isSubmitting}
        />
        {errors.description && (
          <small id="descriptionHelp" className="form-text text-danger">
            {errors.description.message}
          </small>
        )}
      </div>

      <div className="form-group">
        <select
          className="form-select"
          multiple
          aria-label="multiple select example"
          {...register('products')}
          disabled={isSubmitting}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </select>
        <small id="descriptionHelp" className="form-text">
          You can multiple select with cmd on Mac or ctrl on Windows
        </small>
      </div>

      <button
        type="submit"
        className="btn btn-success mb-2"
        disabled={isSubmitting}
      >
        Add group
      </button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}

// {
//   id: 1,
//   title: 'Order 1',
//   date: '2017-06-29 12:09:33',
//   description: 'desc',
//   products: [mockProducts[0], mockProducts[1]],
// },
