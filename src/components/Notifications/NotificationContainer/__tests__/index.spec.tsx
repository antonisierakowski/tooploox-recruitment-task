import { createPreloadedStore } from '../../../../store';
import { rootStateFixture } from '../../../../fixtures/rootStateFixture';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import React from 'react';
import { NotificationContainer } from '../index';
import { notificationStateFixture } from '../../../../fixtures/notifiationStateFixture';
import { provideStore } from '../../../../provideStore';

const store = createPreloadedStore(rootStateFixture);

let renderResult: RenderResult;

beforeEach(() => {
  renderResult = render(provideStore(<NotificationContainer />, store));
});

it('should match to the generated snapshot', () => {
  expect(renderResult.asFragment()).toMatchSnapshot();
});

it('should render notifications', () => {
  for (const notification of notificationStateFixture.notifications) {
    const notificationComponent = renderResult.getByTestId(notification.id);
    expect(notificationComponent).toBeTruthy();
  }
});

it('should close notifications', async () => {
  const { id } = notificationStateFixture.notifications[0];

  expect(renderResult.getByTestId(id)).toBeInTheDocument();

  const closeIcon = renderResult.getByTestId(`closeIcon_${id}`);
  fireEvent.click(closeIcon);

  expect(renderResult.queryByTestId(id)).toBeNull();
});
